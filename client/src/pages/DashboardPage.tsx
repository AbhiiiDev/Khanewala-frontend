import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useNavigate } from "react-router-dom"
import { useGetPendingList } from "@/api/PendingRestaurantApi"



const DashboardPage = () => {
  const navigate = useNavigate()

const {pendingRestaurants}=useGetPendingList();

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
              <Button
                onClick={() => navigate(`/admin/restaurants/${rest._id}`)}
                className="mt-2"
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage
