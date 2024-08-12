import { Title } from "@solidjs/meta";
import { ArticlePreview } from "~/components/article";
import { Container, Content, IconLink } from "~/components/structures";
import {
  GithubLogo,
  LinkedInLogo,
  TwitterLogo,
  WorkSVG,
} from "~/components/svgs";
import { WorkItem } from "~/components/work";

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
        <header class="relative flex flex-col pt-40">
          <Container>
            <Content>
              <div class="mx-auto max-w-2xl lg:max-w-5xl">
                <img
                  alt="Profile Picture"
                  src="./dallas-img.jpeg"
                  class="rounded-full bg-neutral-800 h-16 w-16"
                />
              </div>
            </Content>
          </Container>
        </header>
        <main class="flex-auto">
          <div class="sm:px-8 mt-9">
            <Container>
              <Content>
                <div class="mx-auto max-w-2xl lg:max-w-5xl">
                  <div class="max-w-2xl">
                    <h1 class="text-4xl font-bold tracking-tight text-neutral-100 sm:text-5xl">
                      Hey, I'm Dallas James and I am a person!
                    </h1>
                    <p class="mt-6 text-neutral-400">
                      Here's some stuff about me that i'll fill out later!.
                      Hurray for a bunch of filler text that is just here to
                      fill up the space so we can make sure it looks good with
                      all sorts of content on all sorts of devices.
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
                <div class="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                  <div class="flex flex-col gap-16">
                    <ArticlePreview
                      title="A cool looking article"
                      description="This is a description of the best article you've ever read. Unfortunately, it's just a placeholder so you'll never actually get to read what it is. That's too bad."
                      href="#"
                      date="September 10, 2024"
                    />
                  </div>
                  <div class="space-y-10 lg:pl-16 xl:pl-24">
                    <div class="rounded-2xl border border-neutral-700/40 p-6">
                      <h2 class="flex text-sm font-semibold text-neutral-100">
                        <WorkSVG />
                        <span class="ml-3">Work</span>
                      </h2>
                      <ol class="mt-6 space-y-4">
                        <WorkItem
                          company="Cool Company"
                          role="Aweomse Role"
                          years="1900-Present"
                        />
                      </ol>
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
