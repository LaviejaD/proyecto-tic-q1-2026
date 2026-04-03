import "preact";

declare module "preact" {
  namespace JSX {
    interface IntrinsicAttributes {
      [key: string]: any;
    }
  }
}
