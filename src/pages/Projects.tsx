import { SearchBar } from '../components/Projects/Searchbar';
import { TagFilter } from '../components/Projects/TagFilter';
import { ProjectGrid } from '../components/Projects/ProjectGrid';
import { projects } from '../data/projects';
import { useProjectFilter } from '../hooks/useProjectFilter';

export const Projects = () => {
    const {
        searchQuery,
        setSearchQuery,
        selectedTags,
        toggleTag,
        allTags,
        filteredProjects
    } = useProjectFilter(projects);

    return (
        <div className="min-h-screen bg-neutral-900">
            <div className="container p-4 mx-auto lg:p-8">
                <div className="max-w-6xl mx-auto space-y-8">
                    <section className="space-y-6 mt-20">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-3xl font-bold text-white">Projects</h2>
                            <p className="max-w-2xl text-neutral-400">
                                Explore my portfolio of projects. Use the search and filters below to find specific technologies or projects.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <SearchBar
                                value={searchQuery}
                                onChange={setSearchQuery}
                            />

                            <TagFilter
                                tags={allTags}
                                selectedTags={selectedTags}
                                onToggle={toggleTag}
                            />
                        </div>
                    </section>

                    <ProjectGrid projects={filteredProjects} />
                </div>
            </div>
        </div>
    );
};
