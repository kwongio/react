import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter();


    return (
        <div>
            동적df페이지입니다. {router.query.boardId}
        </div>
    );
};

export default Index;