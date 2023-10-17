// Define a type called ButtonProps to specify the expected properties for the Button component.
type ButtonProps = {
  type: 'button' | 'submit'; // Type of the button, either 'button' or 'submit'.
  title: string; // Text to display on the button.
  icon?: string; // Optional icon URL.
  variant: string; // CSS class name for styling.
  full?: boolean; // Optional boolean indicating if the button should take up the full width.
}

// Import the 'Image' component from the 'next/image' package and the 'React' library.
import Image from 'next/image';
import React from 'react';

// Define a functional component called 'Button' that takes in the specified ButtonProps as its props.
const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    // Render a button element with dynamic CSS classes based on the props.
    <button
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      type={type}
    >
      {/* Render an optional icon using the 'Image' component if the 'icon' prop is provided. */}
      {icon &&
        <Image
          src={icon}
          alt={title}
          width={22}
          height={22}
        />
      }

      {/* Render a label element with text content based on the 'title' prop. */}
      <label className='bold-16 whitespace-nowrap cursor-pointer'>
        {title}
      </label>
    </button>
  );
}

// Export the 'Button' component as the default export for this module.
export default Button;
