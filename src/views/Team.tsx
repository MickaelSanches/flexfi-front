import TeamCarousel from "../components/TeamCarousel";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const TeamPage = () => {
    return (
    <main>
        <TeamCarousel />
        <section className="flex flex-col items-center text-center px-6 py-20">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold">
            Back FlexFi.
            <br />
            Join the movement.
        </h2>
        <JoinWaitlistButton />
        </section>
    </main>
    );
};

export default TeamPage;
