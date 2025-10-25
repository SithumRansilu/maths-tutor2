export interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
}

export type AppMode = 'chatbot' | 'image' | 'complex' | 'formula';