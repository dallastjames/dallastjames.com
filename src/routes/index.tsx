import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import { For } from "solid-js";
import { ArticlePreview } from "~/components/article";
import { Container, Content, IconLink } from "~/components/structures";
import {
  BlueskyLogo,
  EmailSVG,
  GithubLogo,
  LinkedInLogo,
  TwitterLogo,
  WorkSVG,
} from "~/components/svgs";
import { WorkItem } from "~/components/work";
import { allProjects } from "~/utils/projects";
import { allWork } from "~/utils/work";

export default function Home() {
  return (
    <div class="flex w-full">
      <Title>Dallas James - Technical Product Manager</Title>
      <div class="fixed inset-0 flex justify-center">
        <Container className="flex">
          <div class="w-full bg-neutral-900 ring-1 ring-neutral-300/20" />
        </Container>
      </div>
      <div class="relative flex w-full flex-col">
        <header class="relative flex flex-col">
          <img
            src="./backdrop.jpg"
            class="absolute inset-0 pb-10 w-full h-full object-cover max-w-7xl lg:px-8 mx-auto object-top"
          />
          <Container className="mt-20 lg:mt-32">
            <Content>
              <div class="mx-auto max-w-2xl lg:max-w-5xl px-0 sm:px-8 xl:px-0">
                <div class="relative flex justify-center items-center overflow-hidden rounded-full bg-neutral-800 h-32 w-32 md:h-48 md:w-48 shadow-lg">
                  <img
                    alt="Profile Picture"
                    src="./dallas-img2.png"
                    class="absolute inset-0 top-5 scale-125"
                    style={{
                      "object-fit": "cover",
                      "object-position": "top",
                    }}
                  />
                </div>
              </div>
            </Content>
          </Container>
        </header>
        <main class="flex-auto">
          <div class="sm:px-8 mt-9">
            <Container>
              <Content>
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="max-w-2xl lg:max-w-5xl">
                    <h1 class="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl max-w-[720px]">
                      👋 I'm Dallas James, an engineer and product manager.
                    </h1>
                    <p class="mt-6 text-neutral-400">
                      My very first project was building games using RPG Maker
                      XP, scripting in Ruby. I discovered that I loved being able
                      to have a vision for something, then make it a reality
                      through code. That passion has stayed with me as I became
                      a professional software engineer, and is what drove me to
                      become a product manager. Living in the intersection of
                      technology, users, and creativity is where I've found my
                      happy place.
                    </p>
                    <div class="mt-6 flex gap-6">
                      <IconLink
                        href="https://github.com/dallastjames"
                        icon={<GithubLogo />}
                      />
                      <IconLink
                        href="https://www.linkedin.com/in/dallastjames/"
                        icon={<LinkedInLogo />}
                      />
                      <IconLink
                        href="https://bsky.app/profile/dallastjames.dev"
                        icon={<BlueskyLogo />}
                      />
                      <IconLink
                        href="https://x.com/dallastjames"
                        icon={<TwitterLogo />}
                      />
                    </div>
                  </div>
                </div>
              </Content>
            </Container>
          </div>
          <div class="sm:px-8 mt-24 md:mt-28">
            <Container>
              <Content>
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div class="flex flex-col gap-16">
                      <For each={allProjects}>
                        {(project) => (
                          <ArticlePreview
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            type={project.type}
                          />
                        )}
                      </For>
                    </div>
                    <div class="space-y-10 lg:pl-16 xl:pl-24">
                      <div class="rounded-2xl border border-neutral-700/40 p-6">
                        <h2 class="flex text-sm font-semibold text-neutral-100">
                          <EmailSVG />
                          <span class="ml-3">Contact Me</span>
                        </h2>
                        <p class="mt-6 text-neutral-400 text-sm">
                          Email:{" "}
                          <a href="mailto:iam@dallastjames.dev" target="_blank">
                            iam@dallastjames.dev
                          </a>
                        </p>
                      </div>
                      <div class="rounded-2xl border border-neutral-700/40 p-6">
                        <h2 class="flex text-sm font-semibold text-neutral-100">
                          <WorkSVG />
                          <span class="ml-3">Work</span>
                        </h2>
                        <ol class="mt-6 space-y-4">
                          <For each={allWork}>
                            {(work) => (
                              <WorkItem
                                company={work.company}
                                companyImgSrc={work.companyImgSrc}
                                companyHref={work.companyHref}
                                role={work.role}
                                years={work.years}
                              />
                            )}
                          </For>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </Content>
            </Container>
          </div>
        </main>
        <footer class="mt-32 flex-none">
          <div class="sm:px-8">
            <Container>
              <div class="border-t border-neutral-700/40 pb-16 pt-10">
                <Content>
                  <div class="mx-auto max-w-2xl lg:max-w-5xl flex justify-end">
                    <p class="text-sm text-neutral-500">
                      © {new Date().getFullYear()} Dallas James. All rights
                      reserved.
                    </p>
                  </div>
                </Content>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    </div>
  );
}
