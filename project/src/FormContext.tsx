import React, { createContext, useState, ReactNode } from 'react';

interface Step {
    name: string;
    duration: string;
    xp: string;
}

interface FormState {
    context: string;
    goal: string;
    description: string;
    steps: Step[];
}

type FormContextType = FormState & {
  updateForm: (data: Partial<FormState>) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [formState, setFormState] = useState<FormState>({
        context: '',
        goal: '',
        description: '',
        steps: [],
    });

    const updateForm = (data: Partial<FormState>) => {
        setFormState((prevState) => ({
            ...prevState,
            ...data,
        }));
    };
    const handleSubmit = async () => {
        try {
            //replace with your endpoint
            const response = await fetch('http://localhost:4000/api/endpoint', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formState),
            });

            const data = await response.json();
            console.log('Server response:', data);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    return (
        <FormContext.Provider value={{ ...formState, updateForm }}>
            {children}
        </FormContext.Provider>
    );
};

export const useForm = (): FormContextType => {
    const context = React.useContext(FormContext);
    if (!context) {
        throw new Error('useForm must be used within a FormProvider');
    }
    return context;
};