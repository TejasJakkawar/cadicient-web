export type offeringProps = {
  offering: string;
  category: string;
  desc: string;
  img: string;
  alt: string;
};

export type serviceProps =
  | {
      heading: string;
      subheading: string;
      img: string;
      alt: string;
      description: string;
      offerings: offeringProps[];
    }
  | undefined;
