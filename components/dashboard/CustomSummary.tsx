import { CustomOverviewProps } from "@/lib/types";
import CustomOverview from "./CustomOverview";

const CustomSummary = (props: CustomOverviewProps) => (
  <CustomOverview {...props} gridClass="grid-cols-2" kpiClass="flex-col gap-2" />
);
export default CustomSummary
