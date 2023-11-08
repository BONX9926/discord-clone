import { db } from "@/lib/db";
import { intialProfile } from "@/lib/inital-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await intialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}`);
  }

  return <div>Create a server</div>;
};

export default SetupPage;
