import React from 'react';

interface TextareaProps {
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  readOnly?: boolean;
  value?: string;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, onChange, readOnly }) => {
  return (
    <textarea
      className="w-full mt-4 p-4 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded resize-none"
      rows={10}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      readOnly={readOnly}
    ></textarea>
  );
};

export default Textarea;
