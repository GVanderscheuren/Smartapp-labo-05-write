export default interface Note {
  id?: number;
  title: string;
  author: string; //foreign-key?
  content: string;
  timestamp?: Date | number | string;
}
