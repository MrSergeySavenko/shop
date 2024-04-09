interface IUsersInfo {
    name: string;
    count: number;
    cost: string;
    color: string;
}

export const fetchUsersChoose = async (req: IUsersInfo) => {
    try {
        const url = 'http://localhost:5000/purchase';

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req),
        });

        const data = await response.json();

        if (response) {
            console.log(data);
            return data;
        }
    } catch (err: unknown) {}
};
