export default function Error({
  errorMessage,
}: {
  errorMessage: string | null;
}) {
  if (!errorMessage) return null;

  return (
    <div>
      <p className="text-center text-xl text-red-500">{errorMessage}</p>
    </div>
  );
}
