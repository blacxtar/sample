
import ChatPageWrapper from "../ChatPageWrapper";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const { id } = await props.params;

  return <ChatPageWrapper id={id} />;
}
