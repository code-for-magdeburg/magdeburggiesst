import { FC } from 'react';
import { useActions, useStoreState } from '../../state/unistore-hooks';
import { useTreeData } from '../../utils/hooks/useTreeData';
import { useCommunityData } from '../../utils/hooks/useCommunityData';
import { useRainGeoJson } from '../../utils/hooks/useRainGeoJson';
import { usePumpsGeoJson } from '../../utils/hooks/usePumpsGeoJson';
import { TreesMap } from './TreesMap';
import 'mapbox-gl/dist/mapbox-gl.css';
import { useRouter } from 'next/router';

export const Map: FC<{
  showOverlay: boolean | undefined;
  isNavOpened: boolean | undefined;
  treeId?: string | null;
}> = ({ treeId, showOverlay, isNavOpened }) => {
  const visibleMapLayer = useStoreState('visibleMapLayer');
  const ageRange = useStoreState('ageRange');
  const mapViewFilter = useStoreState('mapViewFilter');
  const mapWaterNeedFilter = useStoreState('mapWaterNeedFilter');
  const mapFocusPoint = useStoreState('mapFocusPoint');

  const { openNav, closeNav } = useActions();
  const { data: communityData } = useCommunityData();
  const { data: rainGeoJson } = useRainGeoJson();
  const { data: pumpsGeoJson } = usePumpsGeoJson();
  const { treeData: selectedTreeData } = useTreeData(treeId);
  const { push } = useRouter();

  return (
    <TreesMap
      onTreeSelect={id => {
        if (!id) {
          void push('/');
          closeNav();
          return;
        }
        const nextLocation = `/tree/${id}`;
        void push(nextLocation);
        openNav();
      }}
      rainGeojson={rainGeoJson || null}
      visibleMapLayer={visibleMapLayer}
      isNavOpen={!!isNavOpened}
      showControls={showOverlay}
      pumpsGeoJson={pumpsGeoJson || null}
      ageRange={ageRange || []}
      mapViewFilter={mapViewFilter}
      mapWaterNeedFilter={mapWaterNeedFilter}
      communityData={communityData?.communityFlagsMap || null}
      communityDataWatered={communityData?.wateredTreesIds || []}
      communityDataAdopted={communityData?.adoptedTreesIds || {}}
      selectedTreeId={treeId || undefined}
      focusPoint={selectedTreeData || mapFocusPoint}
    />
  );
};
