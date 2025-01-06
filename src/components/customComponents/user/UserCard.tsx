import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export function UserCard() {
  return (
    <Card className="">
      <CardHeader>
        <CardTitle>Hija</CardTitle>
      </CardHeader>
      <CardContent></CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="destructive">Delete</Button>
      </CardFooter>
    </Card>
  );
}
