
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { User } from "lucide-react";

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  photoUrl?: string;
  delay?: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  photoUrl,
  delay = 0,
}) => {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="p-6 pb-0 flex items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-willis-red/10 rounded-full flex items-center justify-center text-willis-red">
            <User className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-sm text-gray-600 whitespace-pre-line">{title}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-gray-700">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
