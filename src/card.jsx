const ProfileCard = ({ profile }) => {
    return (
      <div
        className="
          w-80 p-6 rounded-2xl 
          bg-gradient-to-br from-white to-gray-100
          shadow-[0_20px_40px_rgba(0,0,0,0.15)]
          transform transition duration-500
          hover:-translate-y-2 hover:rotate-1
          hover:shadow-[0_30px_60px_rgba(0,0,0,0.25)]
        "
        style={{ perspective: "1000px" }}
      >
        {/* Avatar */}
        <div className="flex justify-center -mt-16">
          <img
            src={profile.avatar}
            alt={profile.name}
            onError={(e) => {
              e.target.src =
                "https://api.dicebear.com/7.x/avataaars/svg?seed=Fallback";
            }}
            className="
              w-28 h-28 rounded-full object-cover
              border-4 border-white
              shadow-[0_10px_25px_rgba(0,0,0,0.25)]
              transform transition
              hover:scale-105
            "
          />
        </div>
  
        {/* Info */}
        <div className="text-center mt-4">
          <h2 className="text-xl font-bold">
            {profile.name}
            {profile.verified && <span className="text-blue-500 ml-1">✔</span>}
          </h2>
  
          <p className="text-sm text-gray-500">
            {profile.age} • {profile.major}
          </p>
  
          <p className="text-xs text-gray-400 mt-1">{profile.dist}</p>
  
          {/* Match */}
          <div className="mt-3">
            <span className="px-4 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-600">
              {profile.match} Match
            </span>
          </div>
  
          {/* Bio */}
          <p className="text-sm text-gray-600 mt-4 line-clamp-3">
            {profile.bio}
          </p>
  
          {/* Interests */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {profile.interests.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs rounded-full bg-purple-100 text-purple-600"
              >
                #{item}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  