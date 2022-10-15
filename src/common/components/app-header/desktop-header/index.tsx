import BaseButton from '../../buttons/base-button';
import OutlinedButton from '../../buttons/outlined-button';

const DesktopHeader = () => {
    return (
        <div>
            <div className="flex gap-x-4 self-end">
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
