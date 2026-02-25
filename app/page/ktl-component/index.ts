import { createElement, type ComponentType } from 'react';
import { createRoot } from 'react-dom/client';


import { Header } from './header/index';
import { Footer } from './footer/index';

export { Header } from './header/index';
export { Footer } from './footer/index';

export { SearchResultView } from './header/index';

interface KTLComponentData {
  name: string;
  node: Node;
  props: Record<string, any>;
}

export const initComponents = (): void => {
  getKTLComponentsComments().forEach(({ name, node, props }) => {
    // We cast to unknown then Element to safely access nextElementSibling
    const mountTarget = (node as unknown as Element).nextElementSibling;
    if (!mountTarget) {
      console.warn(`No mount target found for component: ${name}`);
      return;
    }

    switch (name) {
      case 'header':
        initKTLComponent(mountTarget, Header, {
          ...props,
          onSearchClick: () => {/* no op */},
        });
        break;
      case 'footer':
        initKTLComponent(mountTarget, Footer, props);
        break;
      default:
        console.error(`The "${name}" component was not found.`);
        break;
    }
  });
}

function getKTLComponentsComments(): KTLComponentData[] {
  const commentPrefix = ' ktl_component: ';
  const result: KTLComponentData[] = [];
  const iterator = document.createNodeIterator(document.body, NodeFilter.SHOW_COMMENT);

  let currentNode: Node | null;
  while ((currentNode = iterator.nextNode())) {
    const commentNode = currentNode as Comment;
    const nodeValue = commentNode.nodeValue;

    if (nodeValue && nodeValue.startsWith(commentPrefix)) {
      try {
        const { name, props } = JSON.parse(nodeValue.substring(commentPrefix.length));
        result.push({ name, props, node: commentNode });
      } catch (e) {
        console.error("Failed to parse KTL component JSON:", e);
      }
    }
  }
  return result;
}

function initKTLComponent(node: Element, Component: ComponentType<any>, props: any): void {
  // Updated for React 18: use createRoot instead of render
  const container = document.createElement('div');
  const root = createRoot(container);
  root.render(createElement(Component, props));

  const elementToInject = container.firstChild || container;
  node.replaceWith(elementToInject);
}
