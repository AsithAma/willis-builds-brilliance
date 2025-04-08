
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
      {/* Large Image Section */}
      <div className="w-full h-64 relative">
        {photoUrl ? (
          <img 
            src={photoUrl} 
            alt={name} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-willis-red/10">
            <User className="h-20 w-20 text-willis-red" />
          </div>
        )}
      </div>
      
      {/* Content Section */}
      <CardHeader className="p-6 pb-3">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-600 whitespace-pre-line">{title}</p>
      </CardHeader>
      
      <CardContent className="p-6 pt-0">
        <p className="text-gray-700">{bio}</p>
      </CardContent>
    </Card>
  );
};

export default TeamMember;
