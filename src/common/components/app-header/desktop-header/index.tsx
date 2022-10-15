import BaseButton from '../../buttons/base-button';
import OutlinedButton from '../../buttons/outlined-button';
import MainIcon from '../../main-icon';

const DesktopHeader = () => {
    return (
        <div className="flex w-full items-center justify-between">
            <MainIcon />
            <div className="hidden gap-x-4 lg:flex">
                <BaseButton onClick={() => null}>About</BaseButton>
                <BaseButton onClick={() => null}>Experience</BaseButton>
                <BaseButton onClick={() => null}>Work</BaseButton>
                <BaseButton onClick={() => null}>Contact</BaseButton>
                <OutlinedButton onClick={() => alert('to my resume')}>Resume</OutlinedButton>
            </div>
        </div>
    );
};

export default DesktopHeader;
