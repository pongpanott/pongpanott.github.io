type PersonalContentProps = { title: string; dataList: string[] };

const PersonalContent = ({ title, dataList }: PersonalContentProps) => {
    return (
        <div>
            <p className="mb-6 text-3xl font-quattrocento">{title}</p>

            <div className="flex flex-col gap-y-6">
                {dataList?.map((data) => (
                    <p key={data} className="text-sm">
                        {data}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PersonalContent;
