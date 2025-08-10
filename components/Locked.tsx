export function Locked({ message }: { message: string }) {
  return (
    <div className="text-center py-24">
      <h2 className="text-2xl font-semibold text-gray-700 dark:text-white mb-4">🔒 Locked</h2>
      <p className="text-lg">{message}</p>
    </div>
  );
}
