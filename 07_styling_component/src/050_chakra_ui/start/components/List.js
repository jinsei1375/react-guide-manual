import { HStack, IconButton, StackDivider, VStack, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
        divider={<StackDivider />}
        // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.600', xl: 'yellow.400',  }}
        borderColor="blackAlpha.100"
        width="80%"
        background="white"
        borderWidth="1px"
        borderRadius="3px"
        p={5}
        alignItems="start"
        >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing={5}>
                        <IconButton onClick={() => complete(todo.id)} icon={<VscCheck />} isRound bgColor="cyan.100" opacity="0.5">完了</IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
                )
            })}
        </VStack>
    );
}

export default List;