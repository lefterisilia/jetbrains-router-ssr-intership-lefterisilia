import React from 'react';
import Button from '@rescui/button';
import {useTextStyles} from '@rescui/typography';   //npm i @rescui/typography --legacy-peer-deps
import {cardCn} from '@rescui/card';
import cn from 'classnames';

// @ts-ignore
import {Container, Section} from "../../components/layout";

// @ts-ignore
import {cardsData} from './data';

import jetBrainsLogo from '../../assets/jetbrains-logo.svg';

import './index.scss';

export function HeaderSection() {
    const textCn = useTextStyles();

    return <div>
        <Section className="header-section">
            <Container>
                <h1 className={textCn('rs-hero')}>A modern programming language that makes developers happier</h1>
                <div className="header-section__actions">
                    <div>
                        <Button size="l" href="#" className="header-section__get-started-btn">
                            Get started
                        </Button>
                        <Button mode="outline" size="l" href="#" className="header-section__why-btn">
                            Why Kotlin
                        </Button>
                    </div>

                    <div className="header-section__contributors">
                        <img src={jetBrainsLogo} alt=""/>
                        <p className={textCn('rs-text-2')}>
                            Developed by <a className={textCn('rs-link')}
                                            href="https://www.jetbrains.com/">JetBrains</a> & Open-source <a
                            className={textCn('rs-link')}
                            href="https://github.com/JetBrains/kotlin/graphs/contributors">Contributors</a>
                        </p>
                    </div>
                </div>

                <div className="kto-grid kto-grid-gap-16 kto-offset-top-48">
                    {cardsData.map(card => (
                        <a key={card.id} href={card.link} className={cn(cardCn({
                            theme: 'dark',
                            mode: 'classic',
                            isClickable: true
                        }), 'kto-col-3 kto-col-md-6 kto-col-sm-12', 'header-section__card')}>
                            <img src={card.img} alt=""></img>
                            <h2 className={cn(textCn('rs-h3'), 'kto-offset-top-16')}>{card.title}</h2>
                            <p className={cn(textCn('rs-text-2'), 'kto-offset-top-16')}>{card.subTitle}</p>
                        </a>
                    ))}
                </div>

                <p className={cn(textCn('rs-text-2'), 'kto-offset-top-16')}>
                    <a className={textCn('rs-link')} href="/docs/multiplatform.html">Multiplatform for Other
                        Platforms</a>
                    {', '}
                    <a className={textCn('rs-link')} href="/docs/data-science-overview.html">Data Science</a>
                </p>
            </Container>
        </Section>
    </div>
}
