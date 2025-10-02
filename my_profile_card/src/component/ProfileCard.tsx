import React from 'react'

export interface ProfileCardProps {
  fullName: string
  title: string
  description: string
  imageUrl?: string
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  fullName,
  title,
  description,
  imageUrl = 'https://media.licdn.com/dms/image/v2/D4D03AQFpESdEV2RRyA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731527723482?e=1762387200&v=beta&t=xt6oBVCLQkhqTERovbhUTGHOc8y0k9AG8zLHrYTJAxs',
}) => {
  return (
    <div
      className="w-full max-w-[300px] mx-auto bg-white rounded-xl shadow-md hover:shadow-xl transition-transform duration-200 hover:scale-[1.02] overflow-hidden"
      role="region"
      aria-label={`Profile card for ${fullName}`}
    >
      <img
        src={imageUrl}
        alt={`${fullName} profile photo`}
        className="h-48 w-full object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{fullName}</h2>
        <p className="text-sm text-indigo-600 mt-0.5">{title}</p>
        <p className="text-sm text-gray-600 mt-3 leading-relaxed">{description}</p>
        <button
          type="button"
          className="mt-4 w-full inline-flex items-center justify-center rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default ProfileCard


