import { DevicePhoneMobileIcon } from "@heroicons/react/20/solid"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { ButtonLink } from "~/components/ButtonLink"
import { FakeBrowser } from "~/components/FakeBrowser"
import { SocialBannerSmall } from "~/components/SocialBannerSmall"
import { TwoColumnSection } from "~/components/TwoColumnSection"
export { mergeHeaders as headers } from "~/utils/misc"

export default function Projects() {
  return (
    <div>
      <div className="bg-light flex justify-center py-2">
        <span className="text-3xl font-medium">Jacob Paris</span>
      </div>
      <SocialBannerSmall className="bg-light sticky top-0 z-30 mb-8 border-b border-gray-100 py-1" />
      <section className="mx-auto min-h-screen max-w-5xl px-4 pt-24 sm:pl-12">
        <h1 className=" mb-12 text-4xl font-extrabold drop-shadow-sm lg:mb-16 lg:text-5xl">
          Projects
        </h1>

        <div className="flex flex-col space-y-12">
          <TwoColumnSection title="Twitter Search Cheatsheet">
            <div className="max-w-prose flex-grow basis-[30rem] rounded-xl shadow-2xl">
              <FakeBrowser
                href="https://twitterproductivity.com/search-cheatsheet"
                title="Twitter Search Cheatsheet"
              >
                <div className="px-8 pt-12">
                  <h1 className="mb-12 text-4xl font-black">
                    Become a Twitter power user
                  </h1>

                  <ul className="mb-8">
                    <li className="mb-4 flex gap-x-4">
                      <div
                        aria-hidden
                        className="flex h-12 w-12 flex-shrink-0 place-items-center justify-center rounded-full bg-black text-center text-2xl font-black text-white"
                      >
                        <MagnifyingGlassIcon className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="font-bold">Full list of search terms</p>
                        <p className="text-sm">
                          Refine your searches with every query that Twitter
                          supports
                        </p>
                      </div>
                    </li>

                    <li className="mb-4 flex gap-x-4">
                      <div
                        aria-hidden
                        className="flex h-12 w-12 flex-shrink-0 place-items-center justify-center rounded-full bg-black text-center text-2xl font-black text-white"
                      >
                        <DevicePhoneMobileIcon className="h-8 w-8" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <p className="font-bold">Works on mobile</p>
                        <p className="text-sm">
                          Opens search results directly in the Twitter app for
                          iOS and Android
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </FakeBrowser>
            </div>
            <div className="prose prose-sky flex-grow basis-[20rem]">
              <p>
                Twitter has a powerful search tool, but it's not always obvious
                how to use it. This site is a collection of search queries that
                you can use to find the most interesting content on Twitter.
              </p>

              <p>
                <ButtonLink
                  className="-mx-4 rounded-lg px-4 py-2"
                  href="https://twitterproductivity.com/search-cheatsheet"
                >
                  Visit Twitter Search →
                </ButtonLink>
              </p>
            </div>
          </TwoColumnSection>

          <TwoColumnSection title="Gitpodify">
            <div className="prose prose-sky flex-grow basis-[20rem]">
              <p>
                A simple site to generate useful resources for Gitpodification,
                including "open in gitpod" buttons and sample configuration
                scripts
              </p>

              <p>This window is interactive!</p>
              <p>
                <ButtonLink
                  className="-mx-4 rounded-lg px-4 py-2"
                  target="_blank"
                  rel="noopener"
                  href="https://www.gitpodify.com/"
                >
                  Visit Gitpodify →
                </ButtonLink>
              </p>
            </div>
            <div className="max-w-prose flex-grow basis-[30rem] rounded-xl shadow-2xl  shadow-sky-900/50">
              <FakeBrowser href="https://www.gitpodify.com/" title="Gitpodify">
                <div className="px-4 py-8">
                  <div className="flex flex-col items-center">
                    <img
                      src="/images/gitpod.svg"
                      width="60"
                      height="60"
                      alt="Gitpod Logo"
                    />
                    <span className="text-4xl font-bold text-gray-900">
                      Gitpodify
                    </span>
                  </div>
                  <form action="https://www.gitpodify.com/" method="GET">
                    <div className="grid grid-rows-1 place-items-center">
                      <div className="space-y-4 py-4">
                        <label
                          htmlFor="url"
                          className="block max-w-sm text-center text-xs"
                        >
                          Enter the URL to any GitHub, GitLab or Bitbucket
                          repository, branch, or pull/merge request.
                        </label>

                        <input
                          type="text"
                          id="url"
                          name="url"
                          className="w-full rounded-full border px-4 py-1 text-sm"
                        />
                      </div>
                      <div className="flex space-x-4">
                        <button
                          type="submit"
                          className="rounded-xl bg-gray-200 px-4 py-2 text-sm hover:bg-gray-100"
                        >
                          Get Gitpodified Links
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </FakeBrowser>
            </div>
          </TwoColumnSection>

          <TwoColumnSection title="3Q Standup Dashboard">
            <div className="max-w-prose flex-grow basis-[30rem] rounded-xl shadow-2xl ">
              <ThreeQMock />
            </div>
            <div className="prose prose-sky flex-grow basis-[20rem]">
              <p>
                A dashboard for standup meetings, so you can see your team and
                everything they're working on in one place, and everyone knows
                what to discuss and nothing is overlooked.
              </p>

              <p>
                <ButtonLink
                  className="-mx-4 rounded-lg px-4 py-2"
                  target="_blank"
                  rel="noopener"
                  href="https://www.threeq.app/"
                >
                  Visit 3Q →
                </ButtonLink>
              </p>
            </div>
          </TwoColumnSection>

          <TwoColumnSection title="Toolstache Asset Manager">
            <div className="prose prose-sky flex-grow basis-[20rem]">
              <p>
                Helping construction companies manage and track their assets to
                cut down on theft, repurchasing, and missed bill-out
                opportunities.
              </p>

              <p>
                <ButtonLink
                  className="-mx-4 rounded-lg px-4 py-2"
                  href="toolstache"
                >
                  Visit Toolstache →
                </ButtonLink>
              </p>
            </div>
            <div className="max-w-prose flex-grow basis-[30rem] rounded-xl shadow-2xl">
              <FakeBrowser href="toolstache" title="Toolstache">
                <div className="h-96 overflow-hidden bg-black">
                  <img
                    src="/images/assets_2021-06-22-16-39-09.png"
                    alt="Toolstache screenshot"
                  />
                </div>
              </FakeBrowser>
            </div>
          </TwoColumnSection>
        </div>
      </section>
    </div>
  )
}

function ThreeQMock() {
  return (
    <FakeBrowser
      href="https://www.threeq.app/"
      title="3Q"
      className=" bg-gradient-to-tr  from-blue-600  to-blue-500  text-white"
    >
      <ul className="mx-auto max-w-3xl px-4 py-8">
        <li className="mb-4 rounded-md bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
          <div className="text-xl font-semibold">
            <span className="cursor-pointer text-blue-600 hover:text-blue-500">
              ABC-0001
            </span>{" "}
            Support deleting projects
          </div>
        </li>

        <li className="mb-4 rounded-md bg-white px-4 py-2 text-gray-700 hover:bg-gray-50">
          <div className="mb-4 text-xl font-semibold">
            <span className="cursor-pointer text-blue-600 hover:text-blue-500">
              ABC-0002
            </span>{" "}
            Save project to server
          </div>

          <p className="mb-4 text-gray-700">
            {" "}
            As a user, I want to be able to leave the page and come back without
            losing my data.{" "}
          </p>

          <div className="font-semibold">Gitlab</div>

          <div className=" mb-4 flex justify-between">
            <span className="cursor-pointer text-blue-600 hover:text-blue-500">
              Persist project data to database
            </span>
            <span className="font-semibold"> OPEN </span>
          </div>

          <div className="flex space-x-2 py-2">
            <button
              tabIndex={-1}
              className="rounded border bg-white px-2 py-1 shadow-sm hover:bg-gray-100"
            >
              Block
            </button>

            <button
              tabIndex={-1}
              className="rounded border bg-white px-2 py-1 shadow-sm hover:bg-gray-100"
            >
              Stop work
            </button>

            <button
              tabIndex={-1}
              className="rounded border bg-white px-2 py-1 shadow-sm hover:bg-gray-100"
            >
              Ready for QA
            </button>

            <button
              tabIndex={-1}
              className="rounded border bg-white px-2 py-1 shadow-sm hover:bg-gray-100"
            >
              Done
            </button>
          </div>
        </li>
      </ul>

      <svg
        width="100%"
        viewBox="0 0 1280 86"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-none"
      >
        <g fill="#ffffff">
          <path
            d="M1280 66.1c-3.8 0-7.6.3-11.4.8-18.3-32.6-59.6-44.2-92.2-25.9-3.5 2-6.9 4.3-10 6.9-22.7-41.7-74.9-57.2-116.6-34.5-14.2 7.7-25.9 19.3-33.8 33.3-.2.3-.3.6-.5.8-12.2-1.4-23.7 5.9-27.7 17.5-11.9-6.1-25.9-6.3-37.9-.6-21.7-30.4-64-37.5-94.4-15.7-12.1 8.6-21 21-25.4 35.2-10.8-9.3-24.3-15-38.5-16.2-8.1-24.6-34.6-38-59.2-29.9-14.3 4.7-25.5 16-30 30.3-4.3-1.9-8.9-3.2-13.6-3.8-13.6-45.5-61.5-71.4-107-57.8a86.38 86.38 0 0 0-43.2 29.4c-8.7-3.6-18.7-1.8-25.4 4.8-23.1-24.8-61.9-26.2-86.7-3.1-7.1 6.6-12.5 14.8-15.9 24-26.7-10.1-56.9-.4-72.8 23.3-2.6-2.7-5.6-5.1-8.9-6.9-.4-.2-.8-.4-1.2-.7-.6-25.9-22-46.4-47.9-45.8-11.5.3-22.5 4.7-30.9 12.5-16.5-33.5-57.1-47.3-90.6-30.8-21.9 11-36.3 32.7-37.6 57.1-7-2.3-14.5-2.8-21.8-1.6C84.8 47 55.7 40.7 34 54.8c-5.6 3.6-10.3 8.4-13.9 14-6.6-1.7-13.3-2.6-20.1-2.6-.1 0 0 19.8 0 19.8h1280V66.1z"
            fill-opacity=".5"
          ></path>
          <path d="M15.6 86H1280V48.5c-3.6 1.1-7.1 2.5-10.4 4.4-6.3 3.6-11.8 8.5-16 14.5-8.1-1.5-16.4-.9-24.2 1.7-3.2-39-37.3-68.1-76.4-64.9-24.8 2-46.8 16.9-57.9 39.3-19.9-18.5-51-17.3-69.4 2.6-8.2 8.8-12.8 20.3-13.1 32.3-.4.2-.9.4-1.3.7-3.5 1.9-6.6 4.4-9.4 7.2-16.6-24.9-48.2-35-76.2-24.4-12.2-33.4-49.1-50.6-82.5-38.4-9.5 3.5-18.1 9.1-25 16.5-7.1-6.9-17.5-8.8-26.6-5-30.4-39.3-87-46.3-126.2-15.8-14.8 11.5-25.6 27.4-31 45.4-4.9.6-9.7 1.9-14.2 3.9-8.2-25.9-35.8-40.2-61.7-32-15 4.8-26.9 16.5-31.8 31.5-14.9 1.3-29 7.2-40.3 17-11.5-37.4-51.2-58.4-88.7-46.8-14.8 4.6-27.7 13.9-36.7 26.5-12.6-6-27.3-5.7-39.7.6-4.1-12.2-16.2-19.8-29-18.4-.2-.3-.3-.6-.5-.9-24.4-43.3-79.4-58.6-122.7-34.2-13.3 7.5-24.4 18.2-32.4 31.2C99.8 18.5 50 28.5 25.4 65.4c-4.3 6.4-7.5 13.3-9.8 20.6z"></path>
        </g>
      </svg>
    </FakeBrowser>
  )
}