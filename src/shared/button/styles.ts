import clsx from "clsx";

const styles = {
  buttonClass: (
    fullWidth?: boolean,
    size?: string,
    className?: string,
    isDisabled?: boolean,
    noHover?: boolean
  ) =>
    clsx(
      "h-max rounded-full text-white text-sm bg-black duration-500 p-2 px-5 text-base",
      fullWidth && "w-full",
      {
        "p-1 text-base": size === "md",
        "p-3 text-lg": size === "lg",
      },
      className,
      isDisabled && "cursor-not-allowed bg-gray-200 !text-[#A3A3A3]",
      noHover && "lg:hover:transition-none",
      !isDisabled && "hover:bg-black/90 hover:!text-white"
    ),
};

export default styles;
