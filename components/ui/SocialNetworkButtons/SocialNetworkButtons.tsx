// Style
import styles from './SocialNetworkButtons.module.css';

// Component
import SocialNetworkButton from './SocialNetworkButton/SocialNetworkButton';

export default function SocialNetworkButtons() {
    return (
        <div className={styles.socialNetworkIcons}>
            <SocialNetworkButton title="Github" src="/images/github-icon.svg" />
            <SocialNetworkButton
                title="Linkedin"
                src="/images/linkedin-icon.svg"
            />
        </div>
    );
}
