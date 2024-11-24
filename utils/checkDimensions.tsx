import { Dimensions } from "react-native";

export function getPaginationBottom() {
  const { height, width} = Dimensions.get("window");
  console.log(`Height: ${height}`);
  console.log(`Width: ${width}`);
  let paginationBottom: number;
  if (height === 692) {
    paginationBottom = 155;
  } else if (height > 692 && height <= 896) {
    paginationBottom = 168;
  } else {
    paginationBottom = 120; // Default value if none of the conditions match
  }
  return paginationBottom;
}
