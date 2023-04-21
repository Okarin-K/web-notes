import { Code } from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
    markdown: string
}

const newTheme = {
    code: (props: any) => {
        const { children } = props;
        return (
            <Code
                colorScheme={'blackAlpha'}
                p={5}
                display="block"
                whiteSpace="pre"
                // eslint-disable-next-line react/no-children-prop
                children={children}
            />
        )
    }
}

export const Content = (Props: Props) => {
    return (
        <ReactMarkdown components={ChakraUIRenderer(newTheme)} remarkPlugins={[remarkGfm]} skipHtml>
            {Props.markdown}
        </ReactMarkdown>
    )
}