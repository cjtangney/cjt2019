/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface C3Card {
        /**
          * Which side of the card the image should render on
         */
        "cardOrientation": string;
        /**
          * The theme of the card, dictacting look / feel
         */
        "cardStyle": string;
        /**
          * CSS classes to be optionally appended to the wrapper
         */
        "classes": string;
        /**
          * Should the card be full bleed?
         */
        "fullBleed": boolean;
        /**
          * Determines if the header is inline
         */
        "headerInline": boolean;
        /**
          * Determines if the header is a link
         */
        "headerLink": boolean;
    }
    interface C3Icon {
        /**
          * Any CSS classes to append to the SVG
         */
        "classes": string;
        /**
          * The icon to utilize
         */
        "icon": string;
    }
    interface C3LazyImg {
        /**
          * Additional CSS classes to append
         */
        "classes": string;
        /**
          * Image alternate text
         */
        "imgAlt": string;
        /**
          * Image source
         */
        "imgSrc": string;
    }
    interface C3Modal {
    }
    interface C3OffCanvas {
    }
    interface StaticRouter {
        /**
          * Contains the active page's markup from the node server
         */
        "markup": any;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLC3CardElement extends Components.C3Card, HTMLStencilElement {
    }
    var HTMLC3CardElement: {
        prototype: HTMLC3CardElement;
        new (): HTMLC3CardElement;
    };
    interface HTMLC3IconElement extends Components.C3Icon, HTMLStencilElement {
    }
    var HTMLC3IconElement: {
        prototype: HTMLC3IconElement;
        new (): HTMLC3IconElement;
    };
    interface HTMLC3LazyImgElement extends Components.C3LazyImg, HTMLStencilElement {
    }
    var HTMLC3LazyImgElement: {
        prototype: HTMLC3LazyImgElement;
        new (): HTMLC3LazyImgElement;
    };
    interface HTMLC3ModalElement extends Components.C3Modal, HTMLStencilElement {
    }
    var HTMLC3ModalElement: {
        prototype: HTMLC3ModalElement;
        new (): HTMLC3ModalElement;
    };
    interface HTMLC3OffCanvasElement extends Components.C3OffCanvas, HTMLStencilElement {
    }
    var HTMLC3OffCanvasElement: {
        prototype: HTMLC3OffCanvasElement;
        new (): HTMLC3OffCanvasElement;
    };
    interface HTMLStaticRouterElement extends Components.StaticRouter, HTMLStencilElement {
    }
    var HTMLStaticRouterElement: {
        prototype: HTMLStaticRouterElement;
        new (): HTMLStaticRouterElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c3-card": HTMLC3CardElement;
        "c3-icon": HTMLC3IconElement;
        "c3-lazy-img": HTMLC3LazyImgElement;
        "c3-modal": HTMLC3ModalElement;
        "c3-off-canvas": HTMLC3OffCanvasElement;
        "static-router": HTMLStaticRouterElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface C3Card {
        /**
          * Which side of the card the image should render on
         */
        "cardOrientation"?: string;
        /**
          * The theme of the card, dictacting look / feel
         */
        "cardStyle"?: string;
        /**
          * CSS classes to be optionally appended to the wrapper
         */
        "classes"?: string;
        /**
          * Should the card be full bleed?
         */
        "fullBleed"?: boolean;
        /**
          * Determines if the header is inline
         */
        "headerInline"?: boolean;
        /**
          * Determines if the header is a link
         */
        "headerLink"?: boolean;
    }
    interface C3Icon {
        /**
          * Any CSS classes to append to the SVG
         */
        "classes"?: string;
        /**
          * The icon to utilize
         */
        "icon"?: string;
    }
    interface C3LazyImg {
        /**
          * Additional CSS classes to append
         */
        "classes"?: string;
        /**
          * Image alternate text
         */
        "imgAlt"?: string;
        /**
          * Image source
         */
        "imgSrc"?: string;
    }
    interface C3Modal {
    }
    interface C3OffCanvas {
        /**
          * Toggles visibilty of the panel
         */
        "onToggleLeftPanel"?: (event: CustomEvent<any>) => void;
    }
    interface StaticRouter {
        /**
          * Contains the active page's markup from the node server
         */
        "markup"?: any;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c3-card": C3Card;
        "c3-icon": C3Icon;
        "c3-lazy-img": C3LazyImg;
        "c3-modal": C3Modal;
        "c3-off-canvas": C3OffCanvas;
        "static-router": StaticRouter;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c3-card": LocalJSX.C3Card & JSXBase.HTMLAttributes<HTMLC3CardElement>;
            "c3-icon": LocalJSX.C3Icon & JSXBase.HTMLAttributes<HTMLC3IconElement>;
            "c3-lazy-img": LocalJSX.C3LazyImg & JSXBase.HTMLAttributes<HTMLC3LazyImgElement>;
            "c3-modal": LocalJSX.C3Modal & JSXBase.HTMLAttributes<HTMLC3ModalElement>;
            "c3-off-canvas": LocalJSX.C3OffCanvas & JSXBase.HTMLAttributes<HTMLC3OffCanvasElement>;
            "static-router": LocalJSX.StaticRouter & JSXBase.HTMLAttributes<HTMLStaticRouterElement>;
        }
    }
}