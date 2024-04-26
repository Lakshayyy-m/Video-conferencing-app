"use client";

import PersonalRoomContents from "@/components/PersonalRoomContents";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useUser } from "@clerk/nextjs";
import React from "react";

const PersonalRoom = () => {
  const { user } = useUser();
  const meetingId = user?.id;
  const { toast } = useToast();
  const startMeeting = async () => {
    
  };

  return (
    <section className="text-white flex size-full flex-col gap-10">
      <h1 className="text-white text-4xl font-bold">Personal Room</h1>
      <div className="flex w-full flex-col gap-8 sl:max-w-[900px]">
        <PersonalRoomContents
          title="Topic"
          description={`${user?.firstName}'s meeting room`}
        />
        <PersonalRoomContents title="Meeting ID" description={`${meetingId}`} />
        <PersonalRoomContents
          title="Meeting Link"
          description={`${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`}
        />
      </div>
      <div className="flex gap-5">
        <Button className="bg-red-1" onClick={startMeeting}>
          Start Meeting
        </Button>
        <Button
          className="bg-red-2"
          onClick={() => {
            navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${meetingId}?personal=true`
            );
            toast({ title: "Link Copied" });
          }}
        >
          Copy Link
        </Button>
      </div>
    </section>
  );
};

export default PersonalRoom;
