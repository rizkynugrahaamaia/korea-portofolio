import React from 'react';
import Image from 'next/image';

interface ProfileCardProps {
  profileImageUrl: string;
  flagImageUrl: string;
  name: string;
  description: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profileImageUrl, flagImageUrl, name, description }) => {
  return (
    <div className="w-64 p-6 rounded-lg shadow-lg bg-white flex flex-col items-center">
      <div className="relative">
        <Image src={profileImageUrl} alt={name} width={120} height={120} className="rounded-full object-cover" />
        <div className="absolute bottom-2 right-2">
          <Image src={flagImageUrl} alt="Flag" width={25} height={18} className="rounded-sm" />
        </div>
      </div>
      <h2 className="mt-4 text-xl font-semibold text-gray-800">{name}</h2>
      <p className="mt-2 text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default ProfileCard;
