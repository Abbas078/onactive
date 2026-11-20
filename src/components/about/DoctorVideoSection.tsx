import React from "react";
import { VideoPlayer } from "@/components/common/VideoPlayer";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DOCTOR_VIDEOS } from "@/constants/mediaAssets";
import { ShieldCheck, Sparkles, HeartPulse } from "lucide-react";

export function DoctorVideoSection() {
  const video = DOCTOR_VIDEOS.recoveryTalk || DOCTOR_VIDEOS.introReel;

  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Video Player */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="w-full max-w-[340px] sm:max-w-[380px]">
              <VideoPlayer
                src={video.src}
                poster={video.poster}
                title={video.title}
                caption={video.caption}
                aspectRatio="9/16"
              />
            </div>
          </div>

          {/* Right Column: Message & Clinical Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="DOCTOR'S MESSAGE"
              title="A Personal Commitment to Patient Mobility"
              subtitle="Watch Dr. Ankit Jaipal discuss the importance of early diagnosis, anatomical precision, and tailored post-operative rehabilitation."
              align="left"
              className="mb-0"
            />

            <div className="space-y-4 text-sm sm:text-base text-[#52647A] leading-relaxed">
              <p>
                &ldquo;Every patient who walks into our consultation room carries unique goals—whether it is an athlete striving to return to competitive sport or an elderly parent wanting to walk pain-free with their grandchildren. Orthopaedic care is never one-size-fits-all.&rdquo;
              </p>
              <p>
                &ldquo;By combining advanced technology—such as Augmented Reality surgical navigation and minimally invasive arthroscopy—with attentive clinical examination, our priority is always to preserve your natural joints whenever possible and restore active, comfortable movement.&rdquo;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#DCE5EF]">
                <HeartPulse className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#102D4F]">Patient-Centric Care</h4>
                  <p className="text-xs text-[#52647A] mt-0.5">Empathetic listening and personalized clinical plans.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-[#DCE5EF]">
                <Sparkles className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#102D4F]">Innovative Techniques</h4>
                  <p className="text-xs text-[#52647A] mt-0.5">AR navigation, tissue-sparing approaches &amp; rapid recovery.</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#52647A] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>Authentic clinical recording with Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital Jaipur.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

