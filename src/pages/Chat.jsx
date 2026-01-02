import Button from "../components/ui/Button";

export default function Chat({ setPage }) {
  return (
    <div className="pt-32 text-center">
      <h2 className="text-3xl font-black">Chat coming soon</h2>
      <Button variant="ghost" onClick={() => setPage("dashboard")}>
        Back
      </Button>
    </div>
  );
}
