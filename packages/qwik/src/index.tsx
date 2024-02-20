import { cx } from "@classed/utils";
import type { CXLike } from "@classed/utils";

type Create = <CX extends CXLike>(options: { cx: CX }) => (element: string, ...classes: Parameters<CX>) => { type: string; props: { class: string } };

const create: Create = ({ cx }: { cx: any }) => {
  return (element, ...classes) => {
    return {
      type: element,
      props: {
        class: cx(...classes),
      },
    };
  };
};

const classed = create({ cx });

export type { Create };
export { create };
export default classed;
