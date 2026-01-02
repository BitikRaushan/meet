import ProfileCard from "./ProfileCard";

function App() {
  const MOCK_PROFILES = [
    {
      id: 1,
      name: 'Aarav Sharma',
      age: 21,
      major: 'Computer Science',
      dist: '1.2 miles away',
      match: '98%',
      bio: "Looking for a coding partner and someone to play cricket with! 🏏 Let's build the next big thing.",
      interests: ['cricket', 'coding', 'music'],
      avatar: '/aarav.jpg',
      verified: true,
      lastMsg: "Let's catch up at the library!"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <ProfileCard profile={MOCK_PROFILES[0]} />
    </div>
  );
}

export default App;
