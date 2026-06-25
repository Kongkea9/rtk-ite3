import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Product } from "@/lib/type/productType";
import { Button } from "./ui/button";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
      <img
        src={product?.images[0]}
        alt={product.title}
        className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
      />
      <CardHeader>
        <CardAction></CardAction>
        <Badge variant="secondary">{product.slug}</Badge>
        <CardTitle>{product.title}</CardTitle>
        <CardDescription>{product.price}</CardDescription>
      </CardHeader>
      <CardDescription className="line-clamp-2">
        {product.description}
      </CardDescription>
      <CardFooter>
        <Button>View Detail</Button>
      </CardFooter>
    </Card>
  );
}
