import React from 'react';
import classNames from 'classnames';
// Import the CSS you copied earlier
import './footer.css';

interface FooterProps {
    className?: string;
    forwardedRef?: React.Ref<HTMLElement>;
}

const Footer: React.FC<FooterProps> = ({ className, forwardedRef }) => {
    // Using the class names found in the CSS you provided
    const linkClass = "rs-link rs-text-3"; // Approximation of the 'rs-link' logic

    return (
        <footer
            className={classNames('ktl-footer-module_footer_m67Up', className)}
            ref={forwardedRef}
        >
            <div className="ktl-layout ktl-layout--center">

                {/* Social List Area */}
                <div className="ktl-footer-module_social-list-area_bS3eE">
                    <div className="ktl-footer-module_social-list-title_HPzIP rs-text-2 rs-text-2_theme_dark">
                        Stay in touch:
                    </div>
                    <div className="ktl-social-list-module_social-list_K2Nqu">
                        {/* You can add your Social SVGs here directly */}
                    </div>
                </div>

                {/* Navigation List - Built manually to avoid internal JS errors */}
                <nav className="ktl-nav-list-module_nav-list_-k4np">
                    <li className="ktl-nav-item-module_nav-item_isoyN">
                        <a href="https://kotlinlang.org/community/" className="rs-text-2 rs-text-2_theme_dark">Community</a>
                    </li>
                    <li className="ktl-nav-item-module_nav-item_isoyN">
                        <a href="https://kotlinlang.org/docs/home.html" className="rs-text-2 rs-text-2_theme_dark">Docs</a>
                    </li>
                </nav>

                {/* Logo Area */}
                <div className="ktl-footer-module_logo-area_SsNTa">
                    {/* Kotlin Logo SVG goes here */}
                </div>

                {/* Text / Copyright Area */}
                <div className="ktl-footer-module_text-area_flccc rs-text-3 rs-text-3_theme_dark">
                    <div className="ktl-footer-module_motto_xxxxx">
                        Supported and developed by&nbsp;
                        <a
                            className={linkClass}
                            href="https://www.jetbrains.com/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            JetBrains
                        </a>.
                    </div>

                    <div className="ktl-footer-module_copyright_XjtgY">
                        Kotlin™ is&nbsp;protected under the{' '}
                        <a className={linkClass} href="https://kotlinlang.org/foundation/kotlin-foundation.html">
                            Kotlin&nbsp;Foundation
                        </a>{' '}
                        <br className="ktl-footer-module_copyrightBreakLine_0hI7E" />
                        and&nbsp;licensed under the{' '}
                        <a
                            className={linkClass}
                            target="_blank"
                            href="https://github.com/JetBrains/kotlin-web-site/blob/master/LICENSE"
                            rel="noreferrer"
                        >
                            Apache 2&nbsp;license
                        </a>.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export { Footer };
export default Footer;
