import z from "zod";
import { LoginFormValidator, SignupFormValidator } from "./schemas";
import { FieldValues, Path, UseFormRegister} from "react-hook-form";
import { badgesVariants, buttonVariants } from "./utils";
import { StringValidation } from "zod/v3";

export type loginData = z.infer<typeof LoginFormValidator>;

export type signupData = z.infer<typeof SignupFormValidator>;


export type FormRowProps<T extends FieldValues> = {
  register: UseFormRegister<T>;
  label: string;
  name: Path<T>;
  id: string;
  type: string;
  placeholder: string;
  error : string;

};

export type PrimaryBtnProps = {
  children: React.ReactNode;
  variant?  :  keyof typeof buttonVariants;
  className? : string;
  type? : "button" | "submit" | "reset" | undefined;
};


export type FieldErrorProps = {
  id?: string;
  message?: string;
};

export type AuthCardProps = {
  title : string;
  subtitle : string;
  children : React.ReactNode;
}


export type GoogleButtonProps = {
  content? : string;
}

export type SidebarItem = {
  title : string;
  icon : React.ReactNode;
  href : string;
}

export type kpiType = {
  title : string;
  icon : string;
  value : number;
  bg : string;
}

export type CustomOverviewProps = {
  title : string;
  kpisData : kpiType[];
  gridClass? : string;
  kpiClass? :string;
}

export type SalesChartProps = { month: string; sales: number , purchase : number }[];

export type OrderSummaryProps = {
  month: string;
  ordered: number;
  delivered: number;
}[];


export type Column<T> = {
  header: string;
  key: keyof T;
};

export type TableProps<T> = {
  columns: Column<T>[];
  data: T[];
};

export type TopSellingProducts = {
  name : string;
  sold_quantity : number;
  remaining_quantity : number;
  price : number;

}

export type BadgeProps= {
  variant? : keyof typeof badgesVariants;
  children : React.ReactNode;
  customClass? : string;
}


export type DashboardCardProps = {
  title: string;
  children: React.ReactNode;
  link?: { href: string; label?: string };
  className?: string;
};
