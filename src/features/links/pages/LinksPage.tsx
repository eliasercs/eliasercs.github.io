import Container from "../../../components/layout/Container"
import LinkCard from "../../../components/ui/LinkCard"
import ProfileHeader from "../components/ProfileHeader"
import PrimaryButton from "../../../components/ui/Button/Primary"

export default function LinksPage() {
    return <Container>
        <ProfileHeader />

        <div className="space-y-4">
            <LinkCard
                title="Sitio Web Personal"
                href="https://eliasercs.github.io"
                highlighted
                icon={<span>🌐</span>}
            />
            <LinkCard 
                title="GitHub"
                href="https://github.com/eliasercs"
                icon={<span>{"</>"}</span>}
            />
            <LinkCard 
                title="LinkedIn"
                href="https://www.linkedin.com/in/eliasercs/"
                icon={<span>🔗</span>}
            />

            <div className="mt-8">
                <PrimaryButton>
                    ☕ Regálame un café
                </PrimaryButton>
            </div>
        </div>
    </Container>
}