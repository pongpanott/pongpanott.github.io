import HeaderText from 'common/base-ui/text/header-text';

type PersonalContentProps = { title: string; dataList: string[] };

const PersonalContent = ({ title, dataList }: PersonalContentProps) => {
    return (
        <div>
            <HeaderText message={title} fontSize={30} className="mb-6" />

            <div className="flex flex-col gap-y-6">
                {dataList?.map((item) => (
                    <p key={item} className="text-sm">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default PersonalContent;
