type MessageProps = {
  msg: string;
};
// function Message(props: any) {
//   return <h1> {props.msg}</h1>;
// }

// var Message = function (props: any) {
//   return <h1> {props.msg}</h1>;
// };
//const Message = (props: any) => <h1> {props.msg}</h1>;
// Best Way
const Message: React.FC<MessageProps> = (props: MessageProps) => (
  <h1>{props.msg}</h1>
);
export default Message;
