import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, FunctionComponent } from "react";

interface HeadSignProps extends ComponentPropsWithoutRef<"div"> {}

const HeadSignWrapper: FunctionComponent<HeadSignProps> = ({ children, ...rest }) => {
  return (
    <div {...rest} className="flex w-full flex-col items-start">
      <div className="flex flex-col items-start gap-y-2">{children}</div>
      <Separator className="mt-4" />
    </div>
  );
};
interface HeadMainSignProps extends ComponentPropsWithoutRef<"h4"> {
  className?: string;
}

const HeadMainSign: FunctionComponent<HeadMainSignProps> = ({ className, children, ...rest }) => {
  return (
    <h4 className={cn("text-2xl font-semibold text-black", className)} {...rest}>
      {children}
    </h4>
  );
};
interface HeadAdditionalSignProps extends ComponentPropsWithoutRef<"span"> {
  className?: string;
}

const HeadAdditionalSign: FunctionComponent<HeadAdditionalSignProps> = ({ className, children, ...rest }) => {
  return (
    <span className={cn("text-muted-foreground text-sm", className)} {...rest}>
      {children}
    </span>
  );
};

const MainSign = Object.assign(HeadSignWrapper, {
  Main: HeadMainSign,
  Info: HeadAdditionalSign,
});

export default MainSign;
