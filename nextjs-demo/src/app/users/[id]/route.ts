// dynamic route handler
import { users } from "../route";

// for finding a user based on id (user thunder client http://localhost:3000/users/2 for example to find id 2)
export async function GET(request: Request, { params }: {params: {id: string}}) {
    const {id} = await params;
    const user = users.find((user) => user.id === parseInt(id));
    return Response.json(user);
}

// implement delete

// implement update