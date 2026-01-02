import Button from "../components/ui/Button";

export default function Matches({ setPage }) {
  return (
    <div className="pt-32 text-center">
      <h2 className="text-4xl font-black">Discover Students</h2>

      <Button className="mt-8" onClick={() => setPage("chat")}>
        Connect
      </Button>
    </div>
  );
}
