import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  useApprovePendingList,
  useGetPendingList,
} from "@/api/PendingRestaurantApi";

const DashboardPage = () => {

  const { pendingRestaurants } = useGetPendingList();
  const { mutate: approvePending } = useApprovePendingList();
  if(pendingRestaurants?.length===0) return (
    <div className="flex items-center justify-center min-h-[90vh]">
Sorry, No Restaurants Found
    </div>
  )
  return (
    <div className="p-6 mt-28">
      <h1 className="text-2xl font-semibold mb-4">Pending Restaurants</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pendingRestaurants?.map((rest) => (
          <Card key={rest._id}>
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-lg font-bold">{rest.restaurantName}</h2>
                  <p className="text-sm text-muted-foreground">{rest.city}</p>
                  <p className="text-sm">Owner: {rest.user.name}</p>
                </div>
                <Badge variant="outline">Pending</Badge>
              </div>
              <div className="flex justify-between">
                <Button
                  size="sm"
                  onClick={() => approvePending(rest._id)}
                  className="mt-2 font-semibold bg-red-600 text-white hover:bg-red-500"
                >
                  Reject
                </Button>
                <Button
                  size="sm"
                  onClick={() => approvePending(rest._id)}
                  className="mt-2 font-semibold bg-green-600 hover:bg-green-500 text-white"
                >
                  Approve
                </Button>
              </div>
            </CardContent>
          </Card> 
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
