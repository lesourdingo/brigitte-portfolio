export default defineAppConfig({
  ui: {
    colors: {
      primary: "rose",
      neutral: "stone",
    },
    header: {
      slots: {
        root: "border-0 bg-default",
        title: "text-2xl font-bold tracking-tight text-default",
      },
    },
    navigationMenu: {
      variants: {
        active: {
          true: {
            link: "text-primary font-bold",
          },
        },
      },
      compoundVariants: [
        {
          variant: "link",
          active: false,
          class: {
            link: "text-muted font-semibold hover:text-primary",
          },
        },
      ],
    },
    button: {
      defaultVariants: {
        color: "neutral",
        variant: "link",
      },
    },
  },
});
